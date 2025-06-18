import { Button } from '@mcp-marketplace/ui';

export function App() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Product Title</h3>
                <span className="text-sm text-muted-foreground">$29.99</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                This is a brief description of the product that explains what it
                does and why you might want it.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <Button size="sm">View Details</Button>
                <Button variant="outline" size="sm">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Service Package</h3>
                <span className="text-sm text-muted-foreground">$49.99</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Premium service package with advanced features and priority
                support.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <Button size="sm">Learn More</Button>
                <Button variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Premium Bundle</h3>
                <span className="text-sm text-muted-foreground">$99.99</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Complete bundle including all features, premium support, and
                exclusive content.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <Button size="sm">Get Started</Button>
                <Button variant="destructive" size="sm">
                  Limited Time
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
