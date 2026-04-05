export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[color:var(--surface)]" dir="rtl">
      <div className="flex flex-col items-center gap-6">
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-[color:var(--border)] border-t-[color:var(--accent)]" />
        <div className="text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">
          جاري التحميل
        </div>
      </div>
    </div>
  );
}
