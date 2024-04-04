'use client'
import GoogleMapReact from 'google-map-react'
import HeatMap from './components/heatmap';
import Search from './components/Search';
import YearSelector from './components/YearSelector';
export default function Home() {
  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-16">
      <div className='flex flex-row w-1/2 items-center justify-center'>
          <Search />
          <YearSelector/>
      </div>
      <div className="flex flex-row mt-5"> {/* Add flex class to make the children elements flex */}
        <span className="flex items-center text-sm font-medium text-gray-900 me-3">
          <span className="flex w-2.5 h-2.5 bg-blue-600 rounded-full me-1.5 flex-shrink-0"></span>$1,000,000
        </span>
        <span className="flex items-center text-sm font-medium text-gray-900 me-3">
          <span className="flex w-2.5 h-2.5 bg-purple-500 rounded-full me-1.5 flex-shrink-0"></span>$750,000
        </span>
        <span className="flex items-center text-sm font-medium text-gray-900 me-3">
          <span className="flex w-2.5 h-2.5 bg-indigo-500 rounded-full me-1.5 flex-shrink-0"></span>$500,000
        </span>
        <span className="flex items-center text-sm font-medium text-gray-900 me-3">
          <span className="flex w-2.5 h-2.5 bg-teal-500 rounded-full me-1.5 flex-shrink-0"></span>$250,000
        </span>
      </div>
      <HeatMap />
    </main>
  );
}
