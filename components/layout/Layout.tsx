import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

function Layout(props: { children: React.ReactNode }) {
  return (
    <div className={classes.Layout}>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
