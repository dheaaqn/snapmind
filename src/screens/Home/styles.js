import main from "../../assets/styles/main";
import { StyleSheet } from "react-native";
import { colors, colorsLight } from "../../assets/styles/colors";

export const theme = {
    calendarBackground: colors.neutral,
    selectedDayBackgroundColor: colorsLight.grey,
    expandableKnobColor: colors.grey,

    textMonthFontFamily: 'Lexend-Light',
    textDayHeaderFontFamily: 'Lexend-Light',
    textDayFontFamily: 'Lexend-Light',

    textMonthFontSize: 20,
    textDayHeaderFontSize: 12,
    textDayFontSize: 14,

    monthTextColor: colors.grey,
    textSectionTitleColor: colors.black,
    dayTextColor: colors.black,
    todayTextColor: colors.blue,
    selectedDayTextColor: colors.black
}

export const statusBar = {
    background: colors.neutral,
    bar: 'dark-content'
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.neutral
    },
    bar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    titleBar: {
        ...main.textRegular,
        color: colors.grey,
        fontSize: 20
    },
    createIcon: {
        fontSize: 20,
        color: colors.white
    },
    createButton: {
        padding: 5,
        backgroundColor: colorsLight.grey,
        borderRadius: 8
    },
    content: {
        flex: 1
    },
    agenda: {
        flex: 1,
        marginTop: 15,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingVertical: 30,
        backgroundColor: colors.white,
    },
    section: {
        textTransform: 'none',
        fontFamily: 'Lexend-Light',
        fontSize: 14,
        color: colors.grey,
        fontWeight: 'normal'
    },
    agendaItem: {
        marginHorizontal: 18,
        marginVertical: 10,
        borderRadius: 8,
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    alertHigh: {
        color: colors.orange,
        fontSize: 24
    },
    alertMed: {
        color: colors.blue,
        fontSize: 24
    },
    alertLow: {
        color: colors.green,
        fontSize: 24
    },
    agendaHigh: {
        backgroundColor: colorsLight.orange
    },
    agendaMed: {
        backgroundColor: colorsLight.blue
    },
    agendaLow: {
        backgroundColor: colorsLight.green
    },
    agendaTitle: {
        ...main.textBold,
        fontSize: 14
    },
    agendaDesc: {
        ...main.textRegular,
        fontSize: 12
    },
    agendaEmpty: {
        marginHorizontal: 20,
        marginVertical: 10
    },
    emptyTitle: {
        ...main.textRegular
    },
    summary: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 20,
        gap: 10
    },
    summaryItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        padding: 10,
        borderRadius: 8
    },
    boxHigh: {
        width: 10,
        height: 10,
        borderRadius: 4,
        backgroundColor: colors.orange
    },
    boxMed: {
        width: 10,
        height: 10,
        borderRadius: 4,
        backgroundColor: colors.blue
    },
    boxLow: {
        width: 10,
        height: 10,
        borderRadius: 4,
        backgroundColor: colors.green
    }
})