import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const Content = () => {
    const router = useRouter();
    return (
        <div>
            <h1>{router.query.title}</h1>
            <p>This is the blog post content.</p>
        </div>
    )
}

const Page = () => {

    const router = useRouter();

    return (
        <Layout>
            <Content />
        </Layout>
    );
};

export default Page;
