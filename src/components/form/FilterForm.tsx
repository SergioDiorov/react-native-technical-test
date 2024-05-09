import React, { FC, useEffect, useState } from 'react';
import { View, ScrollView, Text, Dimensions, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import {
  alcoolData,
  niveauDetudesLit,
  opinionsPolitiquesSelectData,
  origineSelectData,
  religionSelectData,
  tabacData,
} from './constants';
import RadioButton from './RadioButton/RadioButton';
import SelectInput from './SelectInput/SelectInput';
import RadioListButton from './RadioListButton/RadioListButton';

interface IFilterFormProps {
  clearFilters: boolean;
  setClearFilters: (param: boolean) => void;
}

const FilterForm: FC<IFilterFormProps> = ({
  clearFilters,
  setClearFilters,
}) => {
  const [tabacSelectValue, setTabacSelect] = useState<string>('');
  const [alcoolSelectValue, setAlcoolSelect] = useState<string>('');
  const [origineSelectValue, setOrigineSelect] = useState<string>('None');
  const [religionSelectValue, setReligionSelect] = useState<string>('None');
  const [politiquesSelectValue, setPolitiquesSelect] = useState<string>('None');
  const [niveauDetudesLitValue, setNiveauDetudesLit] = useState<string | null>(
    null,
  );

  useEffect(() => {
    if (clearFilters) {
      setTabacSelect('');
      setAlcoolSelect('');
      setOrigineSelect('None');
      setReligionSelect('None');
      setPolitiquesSelect('None');
      setNiveauDetudesLit(null);
      setClearFilters(false);
    }
  }, [clearFilters]);

  return (
    <ScrollView>
      <Formik
        initialValues={{
          age: '',
          hauter: '',
          origine: '',
          region: '',
          politiques: '',
          niveauDetudes: '',
          tabac: '',
          alcool: '',
        }}
        onSubmit={(values) => console.log(values)}
      >
        {({}) => (
          <View style={{ paddingHorizontal: 16, paddingTop: 34 }}>
            <View style={{ marginBottom: 32 }}>
              <Text
                style={[
                  styles.label,
                  {
                    marginBottom: 17,
                  },
                ]}
              >
                Âge
              </Text>
              <MultiSlider
                values={[18, 35]}
                sliderLength={Dimensions.get('window').width - 56}
                selectedStyle={{ backgroundColor: '#ff9433', height: 6 }}
                pressedMarkerStyle={{ height: 23, width: 23 }}
                containerStyle={{
                  paddingBottom: 22,
                  alignItems: 'center',
                }}
                onValuesChange={(value) => console.log(value)}
                markerStyle={{
                  height: 26,
                  width: 26,
                  borderWidth: 2,
                  borderRadius: 50,
                  backgroundColor: '#fff',
                  borderColor: '#ff9433',
                }}
                trackStyle={{
                  backgroundColor: '#2b1f23',
                }}
                unselectedStyle={{
                  borderRadius: 10,
                  height: 6,
                }}
                min={0}
                markerOffsetY={3}
                max={70}
                step={1}
                allowOverlap={false}
                snapped
                isMarkersSeparated
                customMarkerLeft={(e) => (
                  <>
                    <View style={styles.customMarker}>
                      <Text style={styles.markerText}>{e.currentValue}</Text>
                    </View>
                  </>
                )}
                customMarkerRight={(e) => (
                  <>
                    <View style={styles.customMarker}>
                      <Text style={styles.markerText}>{e.currentValue}</Text>
                    </View>
                  </>
                )}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                width: '100%',
                marginBottom: 32,
              }}
            >
              <Text
                style={[
                  styles.label,
                  {
                    marginBottom: 17,
                  },
                ]}
              >
                Hauteur
              </Text>
              <MultiSlider
                values={[170, 185]}
                sliderLength={Dimensions.get('window').width - 58}
                selectedStyle={{ backgroundColor: '#ff9433', height: 6 }}
                pressedMarkerStyle={{ height: 23, width: 23 }}
                containerStyle={{
                  paddingBottom: 22,
                  alignItems: 'center',
                }}
                onValuesChange={(value) => console.log(value)}
                markerStyle={{
                  height: 26,
                  width: 26,
                  borderWidth: 2,
                  borderRadius: 50,
                  backgroundColor: '#fff',
                  borderColor: '#ff9433',
                }}
                trackStyle={{
                  backgroundColor: '#2b1f23',
                }}
                unselectedStyle={{
                  borderRadius: 10,
                  height: 6,
                }}
                markerOffsetY={3}
                min={150}
                max={200}
                step={1}
                allowOverlap={false}
                snapped
                isMarkersSeparated
                customMarkerLeft={(e) => (
                  <>
                    <View style={styles.customMarker}>
                      <Text style={[styles.markerText, { width: 45 }]}>
                        {e.currentValue}cm
                      </Text>
                    </View>
                  </>
                )}
                customMarkerRight={(e) => (
                  <>
                    <View style={styles.customMarker}>
                      <Text style={[styles.markerText, { width: 45 }]}>
                        {e.currentValue}cm
                      </Text>
                    </View>
                  </>
                )}
              />
            </View>

            <View
              style={{
                justifyContent: 'center',
                width: '100%',
                marginBottom: 20,
              }}
            >
              <SelectInput
                title='Origine'
                selectedValue={origineSelectValue}
                onSelect={(value) => setOrigineSelect(value)}
                options={origineSelectData}
              />
            </View>

            <View
              style={{
                justifyContent: 'center',
                width: '100%',
                marginBottom: 20,
              }}
            >
              <SelectInput
                title='Religion'
                selectedValue={religionSelectValue}
                onSelect={(value) => setReligionSelect(value)}
                options={religionSelectData}
              />
            </View>

            <View
              style={{
                justifyContent: 'center',
                width: '100%',
                marginBottom: 20,
              }}
            >
              <SelectInput
                title='Opinions politiques'
                selectedValue={politiquesSelectValue}
                onSelect={(value) => setPolitiquesSelect(value)}
                options={opinionsPolitiquesSelectData}
              />
            </View>

            <View
              style={{
                justifyContent: 'center',
                width: '100%',
                marginBottom: 32,
              }}
            >
              <Text
                style={[
                  styles.label,
                  {
                    marginBottom: 14,
                  },
                ]}
              >
                Niveau d'études
              </Text>
              <View style={{ gap: 14 }}>
                {niveauDetudesLit.map((value) => {
                  return (
                    <RadioListButton
                      value={value}
                      key={value}
                      isActive={niveauDetudesLitValue === value}
                      onPress={() =>
                        niveauDetudesLitValue === value
                          ? setNiveauDetudesLit(null)
                          : setNiveauDetudesLit(value)
                      }
                    />
                  );
                })}
              </View>
            </View>

            <View
              style={{
                justifyContent: 'center',
                width: '100%',
                marginBottom: 32,
              }}
            >
              <Text
                style={[
                  styles.label,
                  {
                    marginBottom: 14,
                  },
                ]}
              >
                Tabac
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                {tabacData.map((value) => {
                  return (
                    <RadioButton
                      key={value}
                      value={value}
                      isActive={tabacSelectValue === value}
                      onPress={() =>
                        tabacSelectValue === value
                          ? setTabacSelect('')
                          : setTabacSelect(value)
                      }
                    />
                  );
                })}
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                width: '100%',
                marginBottom: 60,
              }}
            >
              <Text
                style={[
                  styles.label,
                  {
                    marginBottom: 14,
                  },
                ]}
              >
                Alcool
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                {alcoolData.map((value) => {
                  return (
                    <RadioButton
                      key={value}
                      value={value}
                      isActive={alcoolSelectValue === value}
                      onPress={() =>
                        alcoolSelectValue === value
                          ? setAlcoolSelect('')
                          : setAlcoolSelect(value)
                      }
                    />
                  );
                })}
              </View>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  customMarker: {
    position: 'relative',
    height: 26,
    width: 26,
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: '#fff',
    borderColor: '#ff9433',
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerText: {
    position: 'relative',
    top: 28,
    fontWeight: '700',
    fontSize: 14,
    color: '#fff',
  },
  radioButton: {
    borderRadius: 8,
    width: 112,
    height: 40,
    backgroundColor: '#222021',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default FilterForm;
