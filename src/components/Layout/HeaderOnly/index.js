import Header from './Header';

function DefaultLayout({ children }) {
    return (
        <div className="wrap">
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
