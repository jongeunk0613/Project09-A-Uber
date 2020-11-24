import React, { FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd-mobile';
import styled from '@theme/styled';
import Selector from '@components/Selector';
import Input from '@components/Input';
import useChange from '@hooks/useChange';
import useValidator from '@hooks/useValidator';
import { isCarNumber, isLicense } from '@utils/validators';
import { ToggleFocus } from '@components/UserToggle';
import { InitialState } from '@reducers/.';
import { signUpRequest } from '@reducers/user';
import carTypeMapper from './carTypeMapper';

interface Props {
  name: string;
  email: string;
  password: string;
  phone: string;
  type: ToggleFocus;
}

const StyledDriverForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

  & input,
  select {
    margin-bottom: 1.2rem;
  }

  & .am-button {
    cursor: pointer;
    margin-top: auto;
    font-weight: 700;
    font-size: 0.9rem;
  }
`;

export const carTypes: string[] = ['대형', '중형', '소형'];

const DriverForm: FC<Props> = ({ name, email, password, phone, type }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [carType, , onChangeCarType] = useChange<HTMLSelectElement>('');
  const [carNumber, , onChangeCarNumber, isCarNumValid] = useValidator('', isCarNumber);
  const [license, , onChangeLicense, isLicenseValid] = useValidator('', isLicense);
  const { result } = useSelector(({ signup }: InitialState) => signup);

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const driver = {
        name,
        email,
        password,
        phone,
        driver: {
          licenseNumber: license,
          car: {
            carNumber,
            carType: carTypeMapper(carType),
          },
        },
      };
      dispatch(signUpRequest(driver, type));
    },
    [carType, carNumber, license],
  );

  useEffect(() => {
    if (result) {
      history.push('/');
    }
  }, [result]);

  return (
    <StyledDriverForm>
      <Selector
        title="차량종류"
        name="car"
        items={carTypes}
        placeholder="차량을 선택해주세요"
        onChange={onChangeCarType}
      />
      <Input
        title="차량번호"
        placeholder="차량번호를 입력해주세요. 예시) 07나 1247"
        value={carNumber}
        onChange={onChangeCarNumber}
        allow={isCarNumValid}
      />
      <Input
        title="운전면허 번호"
        placeholder="운전면허 번호 입력해주세요. 12-12-123456-12"
        value={license}
        onChange={onChangeLicense}
        allow={isLicenseValid}
      />
      <Button
        type="primary"
        onClick={onSubmit}
        disabled={!carType || !isCarNumValid || !isLicenseValid}
      >
        회원가입
      </Button>
    </StyledDriverForm>
  );
};

export default DriverForm;
