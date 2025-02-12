import { Button, Input } from "../shared";
import { useState } from "react";
import { Coupon } from "../../../types.ts";
import CurrentCouponList from "./CurrentCouponList.tsx";

interface CouponSectionProps {
  coupons: Coupon[];
  onCouponAdd: (newCoupon: Coupon) => void;
}

const CouponSection = ({ coupons, onCouponAdd }: CouponSectionProps) => {
  const [newCoupon, setNewCoupon] = useState<Coupon>({
    name: "",
    code: "",
    discountType: "percentage",
    discountValue: 0,
  });

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">쿠폰 관리</h2>
      <div className="bg-white p-4 rounded shadow">
        <div className="space-y-2 mb-4">
          <Input
            type="text"
            placeholder="쿠폰 이름"
            value={newCoupon.name}
            onChange={(e) =>
              setNewCoupon({ ...newCoupon, name: e.target.value })
            }
          />
          <Input
            type="text"
            placeholder="쿠폰 코드"
            value={newCoupon.code}
            onChange={(e) =>
              setNewCoupon({ ...newCoupon, code: e.target.value })
            }
          />
          <div className="flex gap-2">
            <select
              value={newCoupon.discountType}
              onChange={(e) =>
                setNewCoupon({
                  ...newCoupon,
                  discountType: e.target.value as "amount" | "percentage",
                })
              }
              className="w-full p-2 border rounded"
            >
              <option value="amount">금액(원)</option>
              <option value="percentage">할인율(%)</option>
            </select>
            <Input
              placeholder="할인 값"
              value={newCoupon.discountValue}
              onChange={(e) =>
                setNewCoupon({
                  ...newCoupon,
                  discountValue: parseInt(e.target.value),
                })
              }
            />
          </div>
          <Button
            onClick={() => onCouponAdd(newCoupon)}
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
          >
            쿠폰 추가
          </Button>
        </div>
        <CurrentCouponList coupons={coupons} />
      </div>
    </div>
  );
};

export default CouponSection;
