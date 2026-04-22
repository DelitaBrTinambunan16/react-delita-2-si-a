import ErrorPage from "../components/ErrorPage";

const NotFound = () => {
  return (
    <ErrorPage 
      code="404"
      message="Halaman Tidak Ditemukan"
      image="/img/404-Error.png"
    />
  );
};

export default NotFound;