import * as Icons from './index';
const icons = [
  { Icon: Icons.Linkedin, title: 'Linkedin' },


];



const IconsComponent = () => {
  return (
    <div >
      {icons.map(({ Icon, title }, key) => {
        return (
          <div  key={key}>
            <Icon />
            <div>{title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default IconsComponent;
