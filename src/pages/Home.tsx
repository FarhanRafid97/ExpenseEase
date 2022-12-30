import feature from '@/dummy/feature.json';
import ButtonLink from '@/components/Button/ButtonLink';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-[15px]">
      <h1 className="gardient-title ">Welcome To Our Expense Tracking App!</h1>

      <div className="flex flex-col gap-4">
        <p className="w-full lg:w-3/4 text-sm md:text-base text-justify font-normal">
          {`At ExpenseEase, we understand how important it is to keep track of your expenses and manage your money. That's why we've created an easy-to-use app that helps you stay on top of your spending and make the most of your income.`}
        </p>
        <div>
          <p className="w-full lg:w-3/4 text-sm md:text-base text-justify ">
            {`Our app offers a range of features to help you manage your expenses, including the ability to:`}
          </p>
          <ul className="mt-2 w-full lg:w-3/4 text-sm md:text-base list-disc px-[25px]">
            {feature.map((feat, i) => (
              <li className="-[25px] " key={i}>
                {feat}
              </li>
            ))}
          </ul>
        </div>
        <p className="w-full lg:w-3/4 text-sm md:text-base text-justify ">
          {`We believe that being aware of your spending habits is the first step towards financial responsibility and stability. With ExpenseEase, you'll have all the tools you need to manage your expenses and make the most of your money.`}
        </p>
        <p className="w-full lg:w-3/4 text-sm md:text-base text-justify ">
          {`Thank you for choosing ExpenseEase and we hope it helps you achieve your financial goals.`}{' '}
        </p>
      </div>
      <div>
        <ButtonLink label="Sign Up Now &nbsp;🚀 " outlined={false} to="/login" />
      </div>
    </div>
  );
};

export default Home;
