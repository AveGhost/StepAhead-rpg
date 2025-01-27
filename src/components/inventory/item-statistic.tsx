import { Item } from "../../models/items";

export const BasicStats = ({ name, value }: { name: string; value: number }) => {
    return <p className="text-white flex justify-between">{name}: {value}</p>;
};

const ItemDefaultStatistic = ({item}: {item?: Item}) => {
    return (
        <>
        {item?.damage ? (
                <BasicStats name="Damage" value={item?.damage} />
            ) : item?.arrmor && item?.evasion ? (
                <>
                    <BasicStats name="Arrmor" value={item?.arrmor} />
                    <BasicStats name="Evasion" value={item?.evasion} />
                </>
            ) : item?.arrmor ? (
                <BasicStats name="Arrmor" value={item?.arrmor} />
            ) : item?.evasion ? (
                <BasicStats name="Evasion" value={item?.evasion} />
            ) : ''
        }
        </>
    )
}

export default ItemDefaultStatistic