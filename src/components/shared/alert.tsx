export default function Alert({child}) {
    return (
        <div role="alert" className="relative flex w-full px-4 py-4 text-base text-white bg-gray-900 rounded-lg font-regular">
            <div className="shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                    stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z">
                    </path>
                </svg>
            </div>
            <div className="ml-3 mr-12">{child}</div>
        </div>
    )
}