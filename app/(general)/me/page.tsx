// app/me/page.tsx (or app/(general)/me/page.tsx)
import React, { Suspense } from "react";
import MeContent from "./MeContent"; // We'll create this next

export default function MePage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><p>Loading...</p></div>}>
      <MeContent />
    </Suspense>
  );
}
