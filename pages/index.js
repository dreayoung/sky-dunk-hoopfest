import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    return () => {
      router.push('/event-tickets');
    };
  }, [router]);
}
