import Header from '~/layouts/components/Header';

function HeaderOnly({ children }) {
    return (
        <div className="wrap">
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
