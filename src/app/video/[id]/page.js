import Link from "next/link";

export default function VideoPage({ params }) {
  return (
    <div className="min-h-screen p-8 font-sans">
      <nav className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Video: {params.id}</h1>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-4 text-red-600">⚠️ PROBLEMATIC IMPLEMENTATION</h2>
          <p className="mb-4">This page demonstrates the deep linking issue where clicking video links automatically opens the mobile app.</p>

          {/* Problematic deep link implementation */}
          <div className="space-y-4">
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 rounded">
              <h3 className="font-semibold mb-2">Automatic App Redirect (PROBLEM)</h3>
              <a
                href="prageru://video/123"
                className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Watch Video (Opens App Automatically)
              </a>
              <p className="text-sm text-red-700 dark:text-red-300 mt-2">
                This link uses app:// scheme which immediately opens the app without user consent
              </p>
            </div>

            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 rounded">
              <h3 className="font-semibold mb-2">Intent Link (ANDROID PROBLEM)</h3>
              <a
                href="intent://video/123#Intent;scheme=prageru;package=com.cappital.prageru;end"
                className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Watch Video (Android Intent)
              </a>
              <p className="text-sm text-red-700 dark:text-red-300 mt-2">
                Android intent links that force app opening
              </p>
            </div>
          </div>
        </div>

        <div className="bg-green-100 dark:bg-green-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-green-600">✅ CORRECT IMPLEMENTATION</h2>
          <p className="mb-4">This shows the proper way to handle deep links with user choice.</p>

          <div className="space-y-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 rounded">
              <h3 className="font-semibold mb-2">User Choice Approach</h3>
              <div className="space-x-2">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  onClick={() => {
                    if (confirm('Open in PragerU app?')) {
                      window.location.href = 'prageru://video/123';
                    }
                  }}
                >
                  Watch in App
                </button>
                <Link
                  href="/browse"
                  className="inline-block bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
                >
                  Continue in Browser
                </Link>
              </div>
              <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                Gives user choice between app and browser
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}