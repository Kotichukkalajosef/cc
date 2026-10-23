import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import Logo from "@/components/brand/Logo";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F3F1EC] px-6 py-24">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>
        <div className="w-8 h-0.5 bg-[#E5932B] mx-auto mb-6" aria-hidden="true" />
        <span className="text-xs font-bold tracking-widest uppercase text-[#E5932B]">
          404 — Page Not Found
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#171614]">
          Directory Location Unavailable
        </h1>
        <p className="mt-4 text-sm text-[#171614]/70 leading-relaxed">
          The destination you requested does not exist or may have been relocated within the CRORESTARS platform.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#171614] rounded-sm hover:bg-[#E5932B] transition-colors"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#171614] border border-[#171614]/20 rounded-sm hover:border-[#E5932B] hover:text-[#E5932B] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
