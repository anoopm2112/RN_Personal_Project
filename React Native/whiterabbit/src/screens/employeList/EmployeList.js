import React, { useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Icon, Layout, useTheme, TopNavigation, Text, Input } from '@ui-kitten/components';
import Realm from "realm";
import AppColor from '../../constents/AppColor'
import { EmployeSchema, addressSchema, comapnySchema } from '../../components/EmployeSchema';

const user = require('../../assets/user.jpg');

const ScreenHeight = Dimensions.get('screen').height;
const ScreenWidth = Dimensions.get('screen').width;

const EmployeList = ({ navigation }) => {
    const theme = useTheme();
    const [value, setValue] = useState('');
    const [data, setData] = useState([]);
    const [searchData, setSarchData] = useState([]);

    useEffect(() => {
        fetchEmployeData();
    }, []);


    const fetchEmployeData = () => {
        Realm.open({ schema: [EmployeSchema, addressSchema, comapnySchema] }).then(async (realm) => {
            const employes = await realm.objects('Employe');
            setData(employes)
            setSarchData(employes)
        });
    };


    const renderIcon = (props) => (
        <Icon {...props} name={'search-outline'} />
    );

    const searchEmployee = text => {
        const employeData = searchData;
        const newData = employeData.filter(item => {
            const itemData = `${item.name.toUpperCase()} ${item.email.toUpperCase()}`
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1
        });
        setData(newData);
        setValue(text)
    };

    const renderItem = ({ item, index }) => (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('EmployeDetails', {
            name: item.name,
            item: item
        })} activeOpacity={.86}>
            <Layout style={styles.employeCard}>
                <Layout style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image defaultSource={user}
                        source={!item.profile_image ? user : { uri: item.profile_image }}
                        style={styles.profileImage} />
                </Layout>
                <Layout style={{ marginLeft: 20 }}>
                    <Text category='h6' style={styles.employeTitle}>{item.name}</Text>
                    <Text category='s1' style={styles.employeSubTitle}>{!item.company ? '' : item.company.name}</Text>
                </Layout>
            </Layout>
        </TouchableWithoutFeedback>
    );

    const emptyList = () => (
        <View style={styles.emptyList}>
            <Text category="h5">No data available</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <TopNavigation
                style={{ backgroundColor: theme['color-primary-default'] }}
                alignment="center"
                title={props => <Text category='h6' {...props}
                    style={[props.style, { color: AppColor.WHITE, fontWeight: 'bold' }]}>EMPLOYEE DETAILS</Text>}
            />
            <View style={{ padding: 10 }}>
                <Input
                    value={value}
                    placeholder='Search by Email / Name '
                    accessoryRight={renderIcon}
                    onChangeText={(text) => searchEmployee(text)}
                />
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                style={{
                    paddingHorizontal: 10,
                    marginTop: 12,
                    marginBottom: 12,
                }}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListEmptyComponent={emptyList}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    body: {
        flex: 1,
        padding: 20,
    },
    employeCard: {
        width: '98%',
        margin: 5,
        elevation: 4,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 7,
        flexDirection: 'row'
    },
    profileImage: {
        width: 45,
        height: 45,
        borderRadius: 22
    },
    employeListContainer: {
        marginTop: 25
    },
    employeTitle: {
        fontSize: 18,
    },
    employeSubTitle: {
        fontSize: 14,
    },
    emptyList: {
        alignItems: 'center',
        paddingTop: ScreenHeight / 10
    },
})


export default EmployeList;
