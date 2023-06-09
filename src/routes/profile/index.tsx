import { Button, Container, Group, Stepper, Title } from '@mantine/core';
import { useState } from 'react';
import { useStyles } from './profile.styles';
import AppStepper from './stepper';
import AppStepper2 from './stepper-copy';

const ApplicationSteps = ({ isFirstStepper }: { isFirstStepper?: boolean }) => {
  const [active, setActive] = useState(0);
  const { classes } = useStyles();
  const nextStep = () => setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <div className={classes.wrapper}>
      <Container
        sx={(theme) => ({
          padding: '0 !important',
          [theme.fn.smallerThan('xl')]: { padding: '0 20px !important' },
        })}
        mt={72}
        mb={27}
        size={'lg'}
      >
        <Title order={3}>Onlayn test topshirish</Title>
      </Container>
      {isFirstStepper ? <AppStepper setActive={setActive} active={active} /> : <AppStepper2 setActive={setActive} active={active} />}
      <Container
        mb={40}
        mt={30}
        p={'1.5rem !important'}
        className={classes.btmContainer}
        size={'lg'}
      >
        <Group position={active !== 0 ? 'apart' : 'right'}>
          {active !== 0 && (
            <Button size="lg" variant="default" onClick={prevStep}>
              Orqaga
            </Button>
          )}
          <Button
            disabled={active >= 2}
            type="submit"
            form={active < 1 ? 'user-data' : 'documents'}
            size="lg"
          >
            Keyingi qadam
          </Button>
        </Group>
      </Container>
    </div>
  );
};

export default ApplicationSteps;
