import Leadership from './Leadership';
import OtherMembers from './OtherMembers';

const TeamsSection = () => {
	return (
		<section className='bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.2),rgba(255,255,255,0.9)),url(/images/carousel/5.jpg)] bg-cover bg-center bg-no-repeat'>
			<Leadership />
			<OtherMembers />
		</section>
	);
};

export { TeamsSection };
