import Authentication from '@/components/Authentication/Authentication';
import Layout from '@/components/Layout';
import { useIsAuth } from '@/hooks/useisAuth';

import feature from '@/dummy/feature.json';
import ButtonLink from '@/components/ButtonLink';

const Home: React.FC = () => {
  useIsAuth();

  return (
    <Authentication>
      <Layout>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div className="text-[36px] flex items-center gap-2">
            <h1 className=" gardient-title font-bold">Welcome To Our Expense Tracking App!</h1>
            <p>🥳</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="w-3/4 text-justify font-normal">
              {`At ExpenseEase, we understand how important it is to keep track of your expenses and manage your money. That's why we've created an easy-to-use app that helps you stay on top of your spending and make the most of your income.`}
            </p>
            <div>
              <p className="w-3/4 text-justify ">
                {`Our app offers a range of features to help you manage your expenses, including the ability to:`}
              </p>
              <ul className="mt-2 w-3/4 list-disc px-[25px]">
                {feature.map((feat, i) => (
                  <li className="-[25px] " key={i}>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
            <p className="w-3/4 text-justify ">
              {`We believe that being aware of your spending habits is the first step towards financial responsibility and stability. With ExpenseEase, you'll have all the tools you need to manage your expenses and make the most of your money.`}
            </p>
            <p className="w-3/4 text-justify ">
              {`Thank you for choosing ExpenseEase and we hope it helps you achieve your financial goals.`}{' '}
            </p>
          </div>
          <div>
            <ButtonLink label="Sign Up Now 🚀 " outlined={false} to="/login" />
          </div>
        </div>
      </Layout>
    </Authentication>
  );
};

export default Home;
