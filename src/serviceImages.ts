// Auto-loads every image found in src/assets/services/<service-id>/
// Drop photos into a service's folder and they appear in that service's panel — no code changes needed.
const modules = import.meta.glob('./assets/services/*/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const byService: Record<string, string[]> = {};

Object.keys(modules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  .forEach((path) => {
    const id = path.split('/').slice(-2)[0];
    (byService[id] ||= []).push(modules[path]);
  });

export function getServiceImages(id: string): string[] {
  return byService[id] ?? [];
}
