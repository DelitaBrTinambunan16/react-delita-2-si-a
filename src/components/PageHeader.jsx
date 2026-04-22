export default function PageHeader({ title, breadcrumb, children }) {
  return (
    <div id="pageheader-container" className="flex items-center justify-between p-4">
      
      <div id="pageheader-left" className="flex flex-col">
        
        <span id="page-title" className="text-3xl font-semibold">
          {title}
        </span>

        <div id="breadcrumb-links" className="flex items-center font-medium space-x-2 mt-2">
          
          {Array.isArray(breadcrumb) ? (
            breadcrumb.map((item, index) => (
              <span key={index} className="flex items-center space-x-2">
                
                <span
                  className="text-gray-500"
                  id={
                    index === 0
                      ? "breadcrumb-home"
                      : index === breadcrumb.length - 1
                      ? "breadcrumb-current"
                      : undefined
                  }
                >
                  {item}
                </span>

                {index !== breadcrumb.length - 1 && (
                  <span
                    id="breadcrumb-separator"
                    className="text-gray-500"
                  >
                    /
                  </span>
                )}
              </span>
            ))
          ) : (
            <span id="breadcrumb-current" className="text-gray-500">
              {breadcrumb}
            </span>
          )}

        </div>
      </div>

      <div id="action-button">
        {children}
      </div>

    </div>
  );
}