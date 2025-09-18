'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SafeBrowsePage() {
  const router = useRouter();
  const [showAppBanner, setShowAppBanner] = useState(true);

  const handleAppChoice = (videoId) => {
    const userChoice = confirm(
      `You can watch Video ${videoId} in the PragerU app for the best experience, or continue in your browser.\n\nOpen in app?`
    );

    if (userChoice) {
      alert(`Demo: Would redirect to prageru://video/${videoId}`);
    } else {
      alert(`Playing Video ${videoId} in browser...`);
    }
  };

  const handleSmartAppOpen = (videoId) => {
    // Smart detection approach
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      handleAppChoice(videoId);
    } else {
      alert(`Desktop detected - Playing Video ${videoId} in browser`);
    }
  };

  return (
    <div className="min-h-screen p-8 font-sans bg-green-50 dark:bg-green-900/10">
      <nav className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </nav>

      {/* App Banner (Non-intrusive) */}
      {showAppBanner && (
        <div className="bg-blue-600 text-white p-4 rounded-lg mb-8 flex justify-between items-center">
          <div>
            <p className="font-semibold">Get the best video experience!</p>
            <p className="text-sm opacity-90">Enhanced quality, offline viewing, and more in our mobile app</p>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => {
                alert('Demo: Would redirect to app store');
                setShowAppBanner(false);
              }}
              className="bg-white text-blue-600 px-3 py-1 rounded text-sm hover:bg-gray-100"
            >
              Get App
            </button>
            <button
              onClick={() => setShowAppBanner(false)}
              className="bg-blue-700 px-3 py-1 rounded text-sm hover:bg-blue-800"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <div className="bg-green-100 dark:bg-green-900/30 border-2 border-green-300 rounded-lg p-6 mb-8">
          <h1 className="text-3xl font-bold mb-4 text-green-700">✅ SAFE BROWSE PAGE</h1>
          <p className="text-green-800 dark:text-green-200 mb-4">
            This page demonstrates proper navigation that gives users control over app opening.
          </p>
          <p className="text-sm text-green-700 dark:text-green-300">
            <strong>Key difference:</strong> No automatic redirects! Users choose when and if to open the app.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Safe Navigation Methods */}
          <div className="bg-white dark:bg-gray-800 border-2 border-green-300 rounded-lg p-6">
            <h2 className="text-xl font-bold text-green-600 mb-4">✅ SAFE NAVIGATION</h2>
            <p className="text-sm mb-4">All navigation methods work safely here:</p>

            <div className="space-y-4">
              {/* Next.js Link */}
              <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 rounded">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">Next.js Link</span>
                  <span className="text-green-600 text-xs">✅ SAFE</span>
                </div>
                <Link
                  href="/safe-browse"
                  className="block w-full text-center bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 text-sm"
                >
                  Link to Same Page
                </Link>
                <p className="text-xs mt-1">Normal web navigation - no app opening</p>
              </div>

              {/* HTML Anchor */}
              <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 rounded">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">HTML Anchor</span>
                  <span className="text-green-600 text-xs">✅ SAFE</span>
                </div>
                <a
                  href="/safe-browse"
                  className="block w-full text-center bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700 text-sm"
                >
                  Anchor Navigation
                </a>
                <p className="text-xs mt-1">Standard anchor - stays in browser</p>
              </div>

              {/* useRouter.push */}
              <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 rounded">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">useRouter.push()</span>
                  <span className="text-green-600 text-xs">✅ SAFE</span>
                </div>
                <button
                  onClick={() => router.push('/safe-browse')}
                  className="block w-full text-center bg-green-700 text-white px-3 py-2 rounded hover:bg-green-800 text-sm"
                >
                  Router Navigation
                </button>
                <p className="text-xs mt-1">Programmatic navigation - browser only</p>
              </div>

              {/* window.location */}
              <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 rounded">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">window.location</span>
                  <span className="text-green-600 text-xs">✅ SAFE</span>
                </div>
                <button
                  onClick={() => window.location.href = '/safe-browse'}
                  className="block w-full text-center bg-green-800 text-white px-3 py-2 rounded hover:bg-green-900 text-sm"
                >
                  Location Navigation
                </button>
                <p className="text-xs mt-1">Direct location - no auto-redirect</p>
              </div>
            </div>
          </div>

          {/* User Choice App Integration */}
          <div className="bg-white dark:bg-gray-800 border-2 border-blue-300 rounded-lg p-6">
            <h2 className="text-xl font-bold text-blue-600 mb-4">🎯 USER CHOICE SOLUTIONS</h2>
            <p className="text-sm mb-4">Proper ways to offer app experience:</p>

            <div className="space-y-4">
              {/* User Confirmation */}
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 rounded">
                <h3 className="font-semibold mb-2">User Confirmation</h3>
                <button
                  onClick={() => handleAppChoice(101)}
                  className="block w-full text-center bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 text-sm"
                >
                  Watch Video 101
                </button>
                <p className="text-xs mt-1">Asks user before opening app</p>
              </div>

              {/* Smart Detection */}
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 rounded">
                <h3 className="font-semibold mb-2">Smart Detection</h3>
                <button
                  onClick={() => handleSmartAppOpen(102)}
                  className="block w-full text-center bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 text-sm"
                >
                  Smart Watch Video 102
                </button>
                <p className="text-xs mt-1">Different behavior for mobile/desktop</p>
              </div>

              {/* Progressive Enhancement */}
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 rounded">
                <h3 className="font-semibold mb-2">Progressive Enhancement</h3>
                <a
                  href="#video-103"
                  onClick={(e) => {
                    e.preventDefault();
                    const isMobile = /Mobile|Android|iPhone|iPad/.test(navigator.userAgent);
                    if (isMobile && confirm('Enhanced mobile experience available in app. Open app?')) {
                      alert('Demo: Would redirect to prageru://video/103');
                    } else {
                      alert('Playing Video 103 in browser...');
                    }
                  }}
                  className="block w-full text-center bg-blue-700 text-white px-3 py-2 rounded hover:bg-blue-800 text-sm"
                >
                  Enhanced Video 103
                </a>
                <p className="text-xs mt-1">Works without JS, enhanced with it</p>
              </div>

              {/* App Store Links */}
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 rounded">
                <h3 className="font-semibold mb-2">App Store Links</h3>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => alert('Demo: Would open App Store')}
                    className="bg-gray-600 text-white px-2 py-1 rounded text-xs hover:bg-gray-700"
                  >
                    iOS App
                  </button>
                  <button
                    onClick={() => alert('Demo: Would open Play Store')}
                    className="bg-gray-700 text-white px-2 py-1 rounded text-xs hover:bg-gray-800"
                  >
                    Android App
                  </button>
                </div>
                <p className="text-xs mt-1">Safe app download links</p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Grid (Browse Experience) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <h2 className="col-span-full text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Browse Videos</h2>

          {[1, 2, 3, 4, 5, 6].map((id) => (
            <div key={id} className="bg-white dark:bg-gray-800 border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded mb-4 flex items-center justify-center">
                <span className="text-gray-500">Video {id} Thumbnail</span>
              </div>
              <h3 className="font-semibold mb-2">Sample Video {id}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Educational content that you can watch in browser or app.
              </p>

              <div className="space-y-2">
                <button
                  onClick={() => alert(`Playing Video ${id} in browser...`)}
                  className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
                >
                  ▶️ Play in Browser
                </button>
                <button
                  onClick={() => handleAppChoice(id)}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                >
                  📱 App Option
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-green-100 dark:bg-green-900/20 border border-green-300 rounded-lg p-6">
          <h3 className="text-xl font-bold text-green-700 mb-4">✅ WHY THIS PAGE WORKS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">What's Different:</h4>
              <ul className="text-sm space-y-1">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  No automatic app:// redirects
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  No intent:// links that force app opening
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  User gets explicit choice
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Default behavior: stay in browser
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">User Benefits:</h4>
              <ul className="text-sm space-y-1">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Control over their browsing experience
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Can choose app when they want it
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  No unexpected interruptions
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  Works for all users (with/without app)
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/solutions"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold mr-4"
          >
            See All Solutions
          </Link>
          <Link
            href="/problem-video/comparison"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 font-semibold"
          >
            Compare with Problem Page
          </Link>
        </div>
      </div>
    </div>
  );
}