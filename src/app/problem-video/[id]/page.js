'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProblemVideoPage({ params }) {
  const router = useRouter();

  // Simulate automatic app redirect on page load (THE PROBLEM)
  useEffect(() => {
    // This simulates what happens on problematic pages
    const timer = setTimeout(() => {
      if (confirm('🚨 PROBLEMATIC BEHAVIOR: This page automatically tries to open the app! (This is a demo - would normally redirect without asking)')) {
        // In real scenario, this would happen automatically without confirm
        // window.location.href = `prageru://video/${params.id}`;
        alert(`Would redirect to: prageru://video/${params.id}`);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [params.id]);

  return (
    <div className="min-h-screen p-8 font-sans bg-red-50 dark:bg-red-900/10">
      <nav className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </nav>

      <div className="max-w-6xl mx-auto">
        <div className="bg-red-100 dark:bg-red-900/30 border-2 border-red-300 rounded-lg p-6 mb-8">
          <h1 className="text-3xl font-bold mb-4 text-red-700">🚨 PROBLEMATIC VIDEO PAGE</h1>
          <p className="text-red-800 dark:text-red-200 mb-4">
            <strong>Video ID:</strong> {params.id}
          </p>
          <p className="text-sm text-red-700 dark:text-red-300">
            This page demonstrates all the navigation methods that cause automatic app opening (the problem).
            In a real scenario, the app would open immediately without user consent.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Direct Deep Link Methods (THE PROBLEM) */}
          <div className="bg-white dark:bg-gray-800 border-2 border-red-300 rounded-lg p-6">
            <h2 className="text-xl font-bold text-red-600 mb-4">❌ DIRECT DEEP LINKS (PROBLEMATIC)</h2>
            <p className="text-sm mb-4 text-red-700">These methods immediately open the app:</p>

            <div className="space-y-3">
              {/* App Scheme Direct Link */}
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 rounded">
                <h3 className="font-semibold mb-2">App Scheme URL</h3>
                <a
                  href={`prageru://video/${params.id}`}
                  className="block w-full text-center bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mb-2"
                >
                  prageru://video/{params.id}
                </a>
                <code className="text-xs">href=&ldquo;prageru://video/{params.id}&rdquo;</code>
              </div>

              {/* Android Intent Link */}
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 rounded">
                <h3 className="font-semibold mb-2">Android Intent</h3>
                <a
                  href={`intent://video/${params.id}#Intent;scheme=prageru;package=com.cappital.prageru;end`}
                  className="block w-full text-center bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 mb-2"
                >
                  Android Intent Link
                </a>
                <code className="text-xs break-all">
                  intent://video/{params.id}#Intent;scheme=prageru;package=com.cappital.prageru;end
                </code>
              </div>

              {/* JavaScript Redirect */}
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 rounded">
                <h3 className="font-semibold mb-2">JavaScript Auto-redirect</h3>
                <button
                  onClick={() => {
                    // This simulates automatic redirect without user consent
                    alert(`Auto-redirecting to: prageru://video/${params.id}`);
                    // window.location.href = `prageru://video/${params.id}`;
                  }}
                  className="block w-full text-center bg-red-800 text-white px-4 py-2 rounded hover:bg-red-900 mb-2"
                >
                  Automatic JS Redirect
                </button>
                <code className="text-xs">
                  window.location.href = &ldquo;prageru://video/{params.id}&rdquo;
                </code>
              </div>

              {/* Meta Refresh */}
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 rounded">
                <h3 className="font-semibold mb-2">Meta Refresh (Server-side)</h3>
                <div className="text-center bg-red-900 text-white px-4 py-2 rounded mb-2">
                  Meta Refresh (Would redirect automatically)
                </div>
                <code className="text-xs">
                  &lt;meta http-equiv=&ldquo;refresh&rdquo; content=&ldquo;0;url=prageru://video/{params.id}&rdquo;&gt;
                </code>
              </div>
            </div>
          </div>

          {/* Navigation Methods Analysis */}
          <div className="bg-white dark:bg-gray-800 border-2 border-orange-300 rounded-lg p-6">
            <h2 className="text-xl font-bold text-orange-600 mb-4">🔍 NAVIGATION METHOD ANALYSIS</h2>
            <p className="text-sm mb-4">How different navigation methods behave on this problematic page:</p>

            <div className="space-y-4">
              {/* Next.js Link */}
              <div className="p-3 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 rounded">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Next.js Link</span>
                  <span className="text-red-600 text-xs">⚠️ AFFECTED</span>
                </div>
                <Link
                  href={`/problem-video/${parseInt(params.id) + 1}`}
                  className="block w-full text-center bg-orange-500 text-white px-3 py-2 rounded hover:bg-orange-600 text-sm"
                >
                  Link to Next Video
                </Link>
                <p className="text-xs mt-1">Even Next.js navigation triggers the problematic page behavior</p>
              </div>

              {/* HTML Anchor */}
              <div className="p-3 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 rounded">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">HTML Anchor</span>
                  <span className="text-red-600 text-xs">⚠️ AFFECTED</span>
                </div>
                <a
                  href={`/problem-video/${parseInt(params.id) + 2}`}
                  className="block w-full text-center bg-orange-600 text-white px-3 py-2 rounded hover:bg-orange-700 text-sm"
                >
                  Anchor to Video +2
                </a>
                <p className="text-xs mt-1">Regular anchors also navigate to problematic pages</p>
              </div>

              {/* useRouter.push */}
              <div className="p-3 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 rounded">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">useRouter.push()</span>
                  <span className="text-red-600 text-xs">⚠️ AFFECTED</span>
                </div>
                <button
                  onClick={() => router.push(`/problem-video/${parseInt(params.id) + 3}`)}
                  className="block w-full text-center bg-orange-700 text-white px-3 py-2 rounded hover:bg-orange-800 text-sm"
                >
                  Router Push to Video +3
                </button>
                <p className="text-xs mt-1">Programmatic navigation still leads to problem pages</p>
              </div>

              {/* window.location */}
              <div className="p-3 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 rounded">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">window.location</span>
                  <span className="text-red-600 text-xs">⚠️ AFFECTED</span>
                </div>
                <button
                  onClick={() => window.location.href = `/problem-video/${parseInt(params.id) + 4}`}
                  className="block w-full text-center bg-orange-800 text-white px-3 py-2 rounded hover:bg-orange-900 text-sm"
                >
                  Window Location to Video +4
                </button>
                <p className="text-xs mt-1">Direct location changes also trigger the issue</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-yellow-100 dark:bg-yellow-900/20 border border-yellow-300 rounded-lg p-6">
          <h3 className="text-xl font-bold text-yellow-700 mb-4">🔍 KEY INSIGHT</h3>
          <p className="text-sm mb-4">
            <strong>The Problem:</strong> It&rsquo;s not the navigation method that causes app opening - it&rsquo;s what happens ON the destination page!
          </p>
          <ul className="text-sm space-y-2">
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              All navigation methods (Link, anchor, router.push, window.location) work normally
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              The issue occurs when the destination page contains automatic app redirect code
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              This page simulates PragerU&rsquo;s video pages that have problematic JavaScript/meta redirects
            </li>
            <li className="flex items-start">
              <span className="text-yellow-600 mr-2">•</span>
              Solution: Fix the destination pages, not the navigation methods
            </li>
          </ul>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/safe-browse"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold"
          >
            See How The Working Page Handles This →
          </Link>
        </div>
      </div>
    </div>
  );
}