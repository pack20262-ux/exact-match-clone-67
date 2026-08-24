import { useNavigate } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { PAYWALL_ENABLED, useSubscription } from "@/lib/subscription";

/**
 * Gates app routes (dashboard, workouts, progress...) behind the subscription
 * flag. Unsubscribed visitors are sent to the offer page in the funnel.
 * Renders nothing while checking, so no protected UI flashes.
 */
export function RequireSubscription({ children }: { children: ReactNode }) {
  const { isSubscribed, loading } = useSubscription();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isSubscribed) {
      navigate({ to: "/premium", replace: true });
    }
  }, [loading, isSubscribed, navigate]);

  if (loading || !isSubscribed) return null;
  return <>{children}</>;
}
