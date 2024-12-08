import React, { useMemo, useRef } from 'react';
import Icon from '@react-native-vector-icons/ionicons';
import { isEmpty } from 'lodash';
import { statusBar, styles, theme } from './styles';
import { agendaItems, getMarkedDates, getTaskSummary } from './data';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { AgendaList, CalendarProvider, ExpandableCalendar } from 'react-native-calendars';

const Home = () => {
    const marked = useRef(getMarkedDates());
    const summary = useRef(getTaskSummary());

    const renderItem = useMemo(() => (props) => {
        const { item } = props;
        const background = item.priority === "high" ? styles.agendaHigh
            : item.priority === "medium" ? styles.agendaMed
                : styles.agendaLow;
        const alert = item.priority === "high" ? styles.alertHigh
                : item.priority === "medium" ? styles.alertMed
                    : styles.alertLow;
        
        if(isEmpty(item)) {
            return (
                <View style={styles.agendaEmpty}>
                    <Text style={styles.emptyTitle}>No Task Planned Today</Text>
                </View>
            )
        }

        return (
            <View style={[styles.agendaItem, background]}>
                <Icon name='alert-circle' style={alert} />
                <View>
                    <Text style={styles.agendaTitle}>{item.title}</Text>
                    <Text style={styles.agendaDesc}>{item.description}</Text>
                </View>
            </View>
        )
    }, [agendaItems])

    const renderSummary = useMemo(() => {
        return (
            <View style={styles.summary}>
                <View style={[styles.summaryItem, styles.agendaHigh]}>
                    <View style={styles.boxHigh} />
                    <Text style={styles.agendaDesc}>{summary.current.high} High</Text>
                </View>
                <View style={[styles.summaryItem, styles.agendaMed]}>
                    <View style={styles.boxMed} />
                    <Text style={styles.agendaDesc}>{summary.current.medium} Medium</Text>
                </View>
                <View style={[styles.summaryItem, styles.agendaLow]}>
                    <View style={styles.boxLow} />
                    <Text style={styles.agendaDesc}>{summary.current.low} Low</Text>
                </View>
            </View>
        )
    }, [summary])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={statusBar.background} barStyle={statusBar.bar} />
            <View style={styles.content}>
                <CalendarProvider date={new Date()}>
                    <ExpandableCalendar
                        theme={theme}
                        hideArrows={true}
                        allowShadow={false}
                        disableWeekScroll={true}
                        markedDates={marked.current}
                        markingType='multi-dot'
                    />
                    <View style={styles.agenda}>
                        <View style={styles.bar}>
                            <Text style={styles.titleBar}>
                                Today Summary
                            </Text>
                            <TouchableOpacity style={styles.createButton}>
                                <Icon name="add" style={styles.createIcon} />
                            </TouchableOpacity>
                        </View>
                        {renderSummary}
                        <View style={styles.bar}>
                            <Text style={styles.titleBar}>
                                Task List
                            </Text>
                        </View>
                        <AgendaList
                            sections={agendaItems}
                            renderItem={renderItem}
                            dayFormat='MMM d, yyyy'
                            markToday={false}
                            sectionStyle={styles.section}
                        />
                    </View>
                </CalendarProvider>
            </View>
        </View>
    );
};

export default Home;