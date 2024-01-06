import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {DividerComponent, TabBarComponent} from 'components';
import {colors, images} from 'values';
import {
  DayComponent,
  SectionComponent,
  StatusComponent,
  TabButtonComponent,
  TabComponent,
  TitleComponent,
  ValueComponent,
  ValueProcessingComponent,
} from './components';
import {SpendingCategoryTypeEnum} from 'models/enums';
import {CartesianChart, Line} from 'victory-native';

type DummyData = {
  name: SpendingCategoryTypeEnum;
  color: string;
  totals: string;
  list: {text: string; status: string; value: string}[];
}[];
const dummyData: DummyData = [
  {
    name: SpendingCategoryTypeEnum.Bills,
    color: '#B893E5',
    totals: '$1,234.98',
    list: [
      {
        text: 'Chase Loans',
        status: 'Chase Checking',
        value: '$234.90',
      },
      {
        text: 'FPL Utilities',
        status: 'Chase Checking',
        value: '$234.90',
      },
    ],
  },
  {
    name: SpendingCategoryTypeEnum.Grocery,
    color: '#FED942',
    totals: '$1,234.98',
    list: [
      {
        text: 'Chase Loans',
        status: 'Chase Checking',
        value: '$234.90',
      },
      {
        text: 'FPL Utilities',
        status: 'Chase Checking',
        value: '$234.90',
      },
      {
        text: 'Publix',
        status: 'Chase Checking',
        value: '$234.90',
      },
    ],
  },
  {
    name: SpendingCategoryTypeEnum.Other,
    color: '#333333',
    totals: '$1,234.98',
    list: [
      {
        text: 'Chase Loans',
        status: 'Chase Checking',
        value: '$234.90',
      },
      {
        text: 'FPL Utilities',
        status: 'Chase Checking',
        value: '$234.90',
      },
    ],
  },
];
const dummyChart = Array.from({length: 31}, (_, i) => ({
  day: i,
  lowTmp: 20 + 10 * Math.random(),
  highTmp: 40 + 30 * Math.random(),
}));

export const ChartScreen: FC = () => {
  const tabs = [
    {name: 'Net Worth', onPress: () => {}},
    {name: 'Credit', onPress: () => {}},
    {name: 'Spending', onPress: () => {}},
  ];
  const buttonTabs = [
    {name: 'All Expenses', onPress: () => {}},
    {name: 'Recurring', onPress: () => {}},
  ];

  const onPressHolisticAI = () => {};

  return (
    <View style={styles.container}>
      <TabBarComponent title="TRACKER" rightIcon={images.setting} />

      <TabComponent tabs={tabs} />

      <ScrollView
        contentContainerStyle={[styles.contentWrapper, {paddingBottom: 200}]}>
        <DayComponent />

        <TabButtonComponent tabs={buttonTabs} />

        <View style={{height: 200}}>
          <CartesianChart
            data={dummyChart}
            xKey="day"
            yKeys={['lowTmp', 'highTmp']}>
            {({points}) => (
              <Line points={points.highTmp} color="red" strokeWidth={3} />
            )}
          </CartesianChart>
        </View>

        <SectionComponent>
          <ValueProcessingComponent
            title="Income"
            value={500}
            max={1239.67}
            positive={true}
          />
          <ValueProcessingComponent
            title="Expenses"
            value={200}
            max={1239.23}
            positive={false}
          />

          <DividerComponent />

          <View style={styles.incomeWrapper}>
            <Text style={styles.title}>Not Income</Text>
            <Text style={styles.textPositive}>⇧ 8.3%</Text>
            <Text style={styles.textPositive}>$345.12</Text>
          </View>
        </SectionComponent>

        <TouchableOpacity onPress={onPressHolisticAI}>
          <SectionComponent>
            <View style={styles.sectionWrapper}>
              <Image source={images.setting} style={styles.icon} />
              <Text style={[styles.title, styles.titlePurple]}>
                Holistic AI
              </Text>
              <Image
                source={images.arrowRight}
                style={[styles.icon, styles.iconRight]}
              />
            </View>
          </SectionComponent>
        </TouchableOpacity>

        {dummyData.map(data => (
          <SectionComponent key={data.name}>
            <TitleComponent
              icon={images.setting}
              text={data.name}
              value={data.totals}
            />

            <DividerComponent />

            {data.list.map(dt => (
              <React.Fragment key={dt.text}>
                <ValueComponent text={dt.text} value={dt.value} />
                <StatusComponent text={dt.status} />
              </React.Fragment>
            ))}
          </SectionComponent>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue1,
  },
  contentWrapper: {
    padding: 16,
    gap: 16,
  },
  title: {
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 16,
  },
  titlePurple: {
    color: colors.purple1,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
    tintColor: colors.purple1,
  },
  iconRight: {
    marginLeft: 'auto',
  },
  sectionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  incomeWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textPositive: {
    fontWeight: 'bold',
    color: colors.green1,
    fontSize: 16,
  },
});
