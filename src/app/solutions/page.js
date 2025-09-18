'use client';

import Link from "next/link";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen p-8 font-sans">
      <nav className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Deep Link Solutions</h1>

        <div className="space-y-8">
          {/* Solution 1: User Choice */}
          <div className="p-6 border border-gray-200 rounded-lg">
            <h2 className="text-xl font-semibold text-green-600 mb-4">Solution 1: User Choice with Confirmation</h2>
            <div className="mb-4">
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
{`// Instead of automatic redirects
<a href="prageru://video/123">Watch Video</a>

// Use JavaScript confirmation
<button onClick={() => {
  if (confirm('Open in PragerU app?')) {
    window.location.href = 'prageru://video/123';
  }
}}>
  Watch Video
</button>`}
              </pre>
            </div>
            <div className="demo-container">
              <button
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mr-4"
                onClick={() => {
                  if (confirm('Would you like to open this video in the PragerU app?')) {
                    alert('Would redirect to: prageru://video/demo');
                  }
                }}
              >
                Try Demo: Watch in App
              </button>
              <span className="text-sm text-gray-600">✅ User gets to choose</span>
            </div>
          </div>

          {/* Solution 2: Smart Detection */}
          <div className="p-6 border border-gray-200 rounded-lg">
            <h2 className="text-xl font-semibold text-green-600 mb-4">Solution 2: Smart App Detection</h2>
            <div className="mb-4">
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
{`function handleVideoClick(videoId) {
  // Check if user is on mobile
  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
    // Show choice modal on mobile
    showAppChoiceModal(videoId);
  } else {
    // Play in browser on desktop
    playInBrowser(videoId);
  }
}

function showAppChoiceModal(videoId) {
  const choice = confirm('You can watch this video in the PragerU app or continue in your browser. Open app?');
  if (choice) {
    window.location.href = \`prageru://video/\${videoId}\`;
  } else {
    playInBrowser(videoId);
  }
}`}
              </pre>
            </div>
            <div className="demo-container">
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mr-4"
                onClick={() => {
                  const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                  if (isMobile) {
                    if (confirm('You can watch this video in the PragerU app or continue in your browser. Open app?')) {
                      alert('Would redirect to: prageru://video/demo');
                    } else {
                      alert('Playing in browser...');
                    }
                  } else {
                    alert('Desktop detected - playing in browser');
                  }
                }}
              >
                Try Smart Detection
              </button>
              <span className="text-sm text-gray-600">✅ Different behavior for mobile/desktop</span>
            </div>
          </div>

          {/* Solution 3: Banner Approach */}
          <div className="p-6 border border-gray-200 rounded-lg">
            <h2 className="text-xl font-semibold text-green-600 mb-4">Solution 3: App Download Banner</h2>
            <div className="mb-4">
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
{`// Show a banner instead of forcing app opening
<div className="app-banner">
  <p>Get the best experience with our mobile app!</p>
  <button onClick={() => window.location.href = 'prageru://video/123'}>
    Open in App
  </button>
  <button onClick={() => dismissBanner()}>
    Continue in Browser
  </button>
</div>`}
              </pre>
            </div>
            <div className="demo-container">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 p-4 rounded-lg mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Get the best experience with our mobile app!</p>
                    <p className="text-sm text-gray-600">Enhanced video quality and offline viewing</p>
                  </div>
                  <div className="space-x-2">
                    <button
                      className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                      onClick={() => alert('Would redirect to: prageru://video/demo')}
                    >
                      Open in App
                    </button>
                    <button
                      className="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700"
                      onClick={(e) => e.target.closest('.bg-blue-50').style.display = 'none'}
                    >
                      Continue in Browser
                    </button>
                  </div>
                </div>
              </div>
              <span className="text-sm text-gray-600">✅ Non-intrusive suggestion</span>
            </div>
          </div>

          {/* Solution 4: Progressive Enhancement */}
          <div className="p-6 border border-gray-200 rounded-lg">
            <h2 className="text-xl font-semibold text-green-600 mb-4">Solution 4: Progressive Enhancement</h2>
            <div className="mb-4">
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm overflow-x-auto">
{`// Default to browser, enhance with app option
<a href="/video/123" className="video-link">
  Watch Video
</a>

// JavaScript enhancement
document.querySelectorAll('.video-link').forEach(link => {
  link.addEventListener('click', (e) => {
    if (navigator.userAgent.includes('Mobile')) {
      e.preventDefault();
      showAppOption(link.href);
    }
    // Desktop users get normal link behavior
  });
});`}
              </pre>
            </div>
            <div className="demo-container">
              <Link
                href="/video/progressive-demo"
                className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 mr-4"
                onClick={(e) => {
                  e.preventDefault();
                  const choice = confirm('This video can be watched in the app or browser. Open app?');
                  if (choice) {
                    alert('Would redirect to: prageru://video/demo');
                  } else {
                    alert('Continuing to browser version...');
                  }
                }}
              >
                Progressive Video Link
              </Link>
              <span className="text-sm text-gray-600">✅ Works without JavaScript, enhanced with it</span>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 rounded-lg">
          <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Recommended Implementation:</h3>
          <p className="text-sm mb-2">For PragerU, we recommend combining Solutions 2 and 3:</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Use smart detection to differentiate mobile vs desktop users</li>
            <li>Show an app banner for mobile users instead of forced redirects</li>
            <li>Always give users the choice to continue in browser</li>
            <li>Make the default behavior &ldquo;stay in browser&rdquo; unless user explicitly chooses app</li>
          </ul>
        </div>
      </div>
    </div>
  );
}