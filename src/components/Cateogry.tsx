
// import Webex from '../images/webex.png';
// import hubspot from '../images/hubspot.png';
// import salesforce from '../images/salesforce.png';
// import slack from '../images/slack.png';
function Sidebar() {
  return (
    <aside className="bg-white-800 text-black font-mono w-full md:w-64 flex-shrink-0 md:flex">
      <div className="p-6">
        <h2 className="text-lg font-semibold pl-4">Categories</h2>
        <ul className="mt-4 pl-4">
          <li className="py-2">
            <a href="#" className="hover:text-blue-500">All</a>
          </li>
          <li className="py-2">
            <a href="#" className="hover:text-blue-500">Popular</a>
          </li>
          <li className="py-2">
            <a href="#" className="hover:text-blue-500">Extension & Apps</a>
          </li>
          <li className="py-2">
            <a href="#" className="hover:text-blue-500">Calendars</a>
          </li>
          <li className="py-2">
            <a href="#" className="hover:text-blue-500">Sales & CRM</a>
          </li>
          <li className="py-2">
            <a href="#" className="hover:text-blue-500">Video Conferencing</a>
          </li>
          <li className="py-2">
            <a href="#" className="hover:text-blue-500">Marketers</a>
          </li>
          <li className="py-2">
            <a href="#" className="hover:text-blue-500">Recruiting & ATS</a>
          </li>
          <li className="py-2">
            <a href="#" className="hover:text-blue-500">Payments</a>
          </li>
          <li className="py-2">
            <a href="#" className="hover:text-blue-500">Analytics</a>
          </li>
          <li className="py-2">
            <a href="#" className="hover:text-blue-500">API & Connectors </a>
          </li>
          <li className="py-2">
            <a href="#" className="hover:text-blue-500">Email Messaging</a>
          </li>
          <li className="py-2">
            <a href="#" className="hover:text-blue-500">Embed Calendly</a>
          </li>
          <li className="py-2">
            <a href="#" className="hover:text-blue-500">Other Integration</a>
          </li>
        </ul>
      </div>
    </aside>
  );
}


function MainContent() {
  const products = [
    {
      id: 1,
      name: 'Zoom',
      href: '#',
      iconImg: 'https://user-images.githubusercontent.com/81185152/112324751-1bccab80-8c81-11eb-8d2d-4a444112839d.png',
      desc: 'Connect from anywhere and eliminate administrative work'
    },
    {
      id: 2,
      name: 'Webex',
      href: '#',
      iconImg: 'https://user-images.githubusercontent.com/81185152/112324751-1bccab80-8c81-11eb-8d2d-4a444112839d.png',
      desc: 'Gather, qualify, and schedule',
    },
    {
      id: 3,
      name: 'Salesforce',
      href: '#',
      // iconImg: salesforce,
      desc: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Slack',
      href: '#',
      // iconImg: slack,
      desc: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Hubspot',
      href: '#',
      // iconImg: hubspot,
      desc: 'Description for Example Product 5.',
    },
    // More products...
  ];

  return (
    <div className="bg-white flex-1">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group flex flex-col rounded-lg overflow-hidden shadow-md">
              <div className="flex items-center justify-center h-16 w-16 bg-gray-200">
                <img src={product.iconImg} />
              </div>
              <div className="flex-1 p-4">
                <h3 className="text-sm dark:text-black font-bold">{product.name}</h3>
                <p className="mt-1 text-lg dark:text-black">{product.desc}</p>
              </div>
              <div className=" border-gray-300">
                <a href={product.href} className="block px-4 py-2 text-blue-500 hover:underline font-bold">Learn More &gt;	  </a>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}



function ParentContainer() {
  return (
    <div className="flex">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default ParentContainer;
