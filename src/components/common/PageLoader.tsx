import styles from "../../app/styles.module.css";
const { pageLoader } = styles;

const PageLoader = () => {
  return (
    <div className="fixed left-0 top-0 w-full h-full bg-[--background] z-[9999] flex justify-center items-center">
      <div className={pageLoader} />
    </div>
  );
};

export default PageLoader;
