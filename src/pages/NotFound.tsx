import { Link } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-7xl font-extrabold text-brand">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold text-navy-950">Page not found</h1>
      <p className="mt-3 max-w-md text-slate-600">
        The page you're looking for doesn't exist or has moved. Try our open roles or head back
        home.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link to="/">
          <Button variant="secondary">
            <ArrowLeft className="h-4 w-4" />
            Back Home
          </Button>
        </Link>
        <Link to="/careers">
          <Button variant="outline">
            <Search className="h-4 w-4" />
            Browse Jobs
          </Button>
        </Link>
      </div>
    </section>
  );
}
