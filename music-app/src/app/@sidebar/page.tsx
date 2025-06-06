import { Button } from '@shadcn/ui/button';

export default function Sidebar() {
  return (
    <aside className="p-4 bg-gray-900 text-white">
      <h2 className="text-xl font-bold mb-4">JioSaavn Clone</h2>
      <nav>
        <ul className="space-y-2">
          <li><Button variant="ghost">Home</Button></li>
          <li><Button variant="ghost">Browse</Button></li>
          <li><Button variant="ghost">Library</Button></li>
          <li><Button variant="ghost">Search</Button></li>
        </ul>
      </nav>
    </aside>
  );
}
