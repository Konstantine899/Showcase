import { GoodsItem } from './GoodsItem';

export const GoodsList = (props) => {
  const { goods = [] } = props;

  if (!goods.length) {
    return <h3>Ничего нет</h3>;
  } else {
    return (
      <div className="goods">
        {goods.map((item) => (
          <GoodsItem key={item.id} {...item} />
        ))}
      </div>
    );
  }
};
