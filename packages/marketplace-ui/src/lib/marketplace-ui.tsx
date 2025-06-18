export function MarketplaceUi() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 rounded-2xl">
      <div className="w-full max-w-md rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight text-center">
            Welcome to MarketplaceUI!
          </h3>
          <p className="text-sm text-muted-foreground text-center">
            This component library uses modern OKLCH colors and CSS variables
          </p>
        </div>
        <div className="p-6 pt-0 space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Primary
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2">
              Secondary
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Outline
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Ghost
            </button>
          </div>
          <div className="rounded-lg border bg-muted p-4">
            <p className="text-sm text-muted-foreground">
              🎨 Using OKLCH color space for better color consistency and modern
              design system
            </p>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Background:</span>
              <code className="font-mono text-xs bg-muted px-2 py-1 rounded">
                oklch(1 0 0)
              </code>
            </div>
            <div className="flex justify-between">
              <span>Radius:</span>
              <code className="font-mono text-xs bg-muted px-2 py-1 rounded">
                0.625rem
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketplaceUi;
