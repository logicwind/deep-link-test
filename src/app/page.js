'use client';

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="font-sans min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Image
            className="dark:invert mx-auto mb-6"
            src="/next.svg"
            alt="Deep Link Navigation Test"
            width={180}
            height={38}
            priority
          />
          <h1 className="text-4xl font-bold mb-4">Deep Link Navigation Methods Demo</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Test all possible navigation methods to understand which ones trigger app opening
          </p>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 p-4 rounded-lg">
            <p className="text-sm">
              <strong>Purpose:</strong> Compare problematic navigation (forces app opening) vs. safe navigation (user choice)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Problematic Page */}
          <div className="p-6 border-2 border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-900/20">
            <h2 className="text-2xl font-bold text-red-600 mb-4">🚨 PROBLEMATIC PAGE</h2>
            <p className="mb-6 text-sm">
              This page demonstrates all navigation methods that <strong>automatically open the mobile app</strong> without user consent.
            </p>

            <div className="space-y-3">
              <Link
                href="/problem-video/123"
                className="block w-full text-center bg-red-600 text-white px-4 py-3 rounded hover:bg-red-700 font-semibold"
              >
                🔗 Next.js Link Component
              </Link>

              <a
                href="/problem-video/123"
                className="block w-full text-center bg-red-700 text-white px-4 py-3 rounded hover:bg-red-800 font-semibold"
              >
                🔗 Standard HTML Anchor
              </a>

              <button
                onClick={() => router.push('/problem-video/123')}
                className="block w-full text-center bg-red-800 text-white px-4 py-3 rounded hover:bg-red-900 font-semibold"
              >
                🔗 useRouter.push()
              </button>

              <button
                onClick={() => window.location.href = '/problem-video/123'}
                className="block w-full text-center bg-red-900 text-white px-4 py-3 rounded hover:bg-red-950 font-semibold"
              >
                🔗 window.location.href
              </button>
            </div>

            <div className="mt-4 text-xs text-red-700 dark:text-red-300">
              ⚠️ All methods above lead to automatic app opening
            </div>
          </div>

          {/* Working Page */}
          <div className="p-6 border-2 border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-900/20">
            <h2 className="text-2xl font-bold text-green-600 mb-4">✅ WORKING PAGE</h2>
            <p className="mb-6 text-sm">
              This page shows the same navigation methods but with <strong>user choice</strong> for app opening.
            </p>

            <div className="space-y-3">
              <Link
                href="/safe-browse"
                className="block w-full text-center bg-green-600 text-white px-4 py-3 rounded hover:bg-green-700 font-semibold"
              >
                🔗 Next.js Link Component
              </Link>

              <a
                href="/safe-browse"
                className="block w-full text-center bg-green-700 text-white px-4 py-3 rounded hover:bg-green-800 font-semibold"
              >
                🔗 Standard HTML Anchor
              </a>

              <button
                onClick={() => router.push('/safe-browse')}
                className="block w-full text-center bg-green-800 text-white px-4 py-3 rounded hover:bg-green-900 font-semibold"
              >
                🔗 useRouter.push()
              </button>

              <button
                onClick={() => window.location.href = '/safe-browse'}
                className="block w-full text-center bg-green-900 text-white px-4 py-3 rounded hover:bg-green-950 font-semibold"
              >
                🔗 window.location.href
              </button>
            </div>

            <div className="mt-4 text-xs text-green-700 dark:text-green-300">
              ✅ All methods above give user control
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 rounded-lg">
            <h3 className="font-semibold text-blue-600 mb-2">Navigation Methods</h3>
            <ul className="text-sm space-y-1">
              <li>• Next.js Link</li>
              <li>• HTML Anchor</li>
              <li>• useRouter.push()</li>
              <li>• window.location</li>
            </ul>
          </div>

          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 rounded-lg">
            <h3 className="font-semibold text-purple-600 mb-2">Deep Link Methods</h3>
            <ul className="text-sm space-y-1">
              <li>• app:// schemes</li>
              <li>• intent:// links</li>
              <li>• Universal Links</li>
              <li>• Meta redirects</li>
            </ul>
          </div>

          <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 rounded-lg">
            <h3 className="font-semibold text-orange-600 mb-2">Solutions</h3>
            <ul className="text-sm space-y-1">
              <li>• User confirmation</li>
              <li>• Smart banners</li>
              <li>• Progressive enhancement</li>
              <li>• Fallback handling</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/solutions"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 font-semibold text-lg"
          >
            View All Solutions & Code Examples
          </Link>
        </div>
      </div>
    </div>
  );
}
