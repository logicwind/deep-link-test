'use client';

import Link from "next/link";

export default function BrowsePage() {
  return (
    <div className="min-h-screen p-8 font-sans">
      <nav className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Browse Videos</h1>

        <div className="bg-green-100 dark:bg-green-800 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-4 text-green-600">✅ WORKING CORRECTLY</h2>
          <p className="mb-4">This page doesn&rsquo;t have the deep linking issue - it allows normal browsing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <div key={id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-500">Video Thumbnail {id}</span>
              </div>
              <h3 className="font-semibold mb-2">Sample Video {id}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                This is a sample video description that would appear on the browse page.
              </p>

              {/* Safe navigation - no automatic app opening */}
              <div className="space-y-2">
                <Link
                  href={`/video/${id}`}
                  className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Watch in Browser
                </Link>
                <button
                  className="w-full bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                  onClick={() => {
                    if (confirm('Open PragerU app to watch this video?')) {
                      window.location.href = `prageru://video/${id}`;
                    }
                  }}
                >
                  Open in App
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 rounded-lg">
          <h3 className="font-semibold mb-2">Why This Page Works Correctly:</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>No automatic app:// scheme redirects</li>
            <li>No intent:// links that force app opening</li>
            <li>User has explicit choice between browser and app</li>
            <li>Default behavior is to stay in browser</li>
            <li>App opening requires user confirmation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}