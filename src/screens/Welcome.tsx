import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Welcome() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      <Card className="w-full max-w-xl">
        <CardHeader className="space-y-2">
          <CardTitle className="text-3xl">
            PlanForge
          </CardTitle>
          <p className="text-muted-foreground">
            Forge calm, structured plans for uncertain situations.
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <p>
            PlanForge is built on the <strong>B.A.S.E.</strong> framework —
            <span className="block mt-1 text-muted-foreground">
              Basic Awareness for Survival and Emergencies.
            </span>
          </p>

          <p className="text-sm text-muted-foreground">
            The goal isn’t fear or stockpiling. It’s clarity.
            Knowing what matters, what you depend on,
            and how to think clearly when systems are stressed.
          </p>

          <Separator />

          <ul className="grid grid-cols-2 gap-4 text-sm">
            <li>• Severe weather</li>
            <li>• Infrastructure disruption</li>
            <li>• Power & comms outages</li>
            <li>• Short‑term self‑reliance</li>
          </ul>

          <div className="pt-4">
            <Button className="w-full" size="lg">
              Start B.A.S.E. Plan
            </Button>
            <p className="mt-2 text-xs text-center text-muted-foreground">
              Free. Offline. No account required.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
``
