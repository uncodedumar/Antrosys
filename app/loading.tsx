export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-accent border-t-secondary rounded-full animate-spin"></div>
        </div>
        <p className="text-primary font-medium">Loading...</p>
      </div>
    </div>
  );
}







