export default function PageHeader({ title, breadcrumb, children }) {
  return (
    <div className="flex items-center justify-between p-4">

      {/* LEFT */}
      <div className="flex flex-col">

        <h1 className="text-3xl font-semibold">
          {title}
        </h1>

        <div className="flex items-center text-sm text-gray-500 mt-2">

          {Array.isArray(breadcrumb) ? (
            breadcrumb.map((item, index) => (
              <div key={index} className="flex items-center">

                <span>
                  {item}
                </span>

                {index !== breadcrumb.length - 1 && (
                  <span className="mx-2">/</span>
                )}

              </div>
            ))
          ) : (
            <span>{breadcrumb}</span>
          )}

        </div>

      </div>

      {/* RIGHT */}
      <div>
        {children}
      </div>

    </div>
  );
}