import { ParserState } from 'lib/metar/parserState';
import { parseCloudDescriptors } from 'lib/metar/parsers/cloudDescriptors';
import {
    TestDataCloudDescriptor_BKN070CB_Data,
    TestDataCloudDescriptor_BKN070CB_Text,
    TestDataCloudDescriptor_CLR_Data,
    TestDataCloudDescriptor_CLR_Text,
    TestDataCloudDescriptor_FEW040_Data,
    TestDataCloudDescriptor_FEW040_Text,
    TestDataCloudDescriptor_FEWTCU_Data,
    TestDataCloudDescriptor_FEWTCU_Text,
    TestDataCloudDescriptor_NCD_Data,
    TestDataCloudDescriptor_NCD_Text,
    TestDataCloudDescriptor_NSC_Data,
    TestDataCloudDescriptor_NSC_Text,
    TestDataCloudDescriptor_OVC230TCU_Data,
    TestDataCloudDescriptor_OVC230TCU_Text,
    TestDataCloudDescriptor_OVCBelow_Data,
    TestDataCloudDescriptor_OVCBelow_Text,
    TestDataCloudDescriptor_SCT120_Data,
    TestDataCloudDescriptor_SCT120_Text,
} from 'tests/data/metar/cloudDescriptors';

describe('cloudDescriptors', () => {
    test('no significant cloud is parsed', () => {
        const parser = new ParserState(TestDataCloudDescriptor_NSC_Text);

        const result = parseCloudDescriptors(parser);
        expect(result).toEqual(TestDataCloudDescriptor_NSC_Data);
    });

    test('no cloud description from system', () => {
        const parser = new ParserState(TestDataCloudDescriptor_NCD_Text);

        const result = parseCloudDescriptors(parser);
        expect(result).toEqual(TestDataCloudDescriptor_NCD_Data);
    });

    test('simple with no cloud type', () => {
        const parser = new ParserState(TestDataCloudDescriptor_FEW040_Text);

        const result = parseCloudDescriptors(parser);
        expect(result).toEqual(TestDataCloudDescriptor_FEW040_Data);
    });

    test('simple with no cloud type but specified', () => {
        const parser = new ParserState(TestDataCloudDescriptor_SCT120_Text);

        const result = parseCloudDescriptors(parser);
        expect(result).toEqual(TestDataCloudDescriptor_SCT120_Data);
    });

    test('cloud type is specified (cumulonimbus)', () => {
        const parser = new ParserState(TestDataCloudDescriptor_BKN070CB_Text);

        const result = parseCloudDescriptors(parser);
        expect(result).toEqual(TestDataCloudDescriptor_BKN070CB_Data);
    });

    test('cloud type is specified (towering cumulonimbus)', () => {
        const parser = new ParserState(TestDataCloudDescriptor_OVC230TCU_Text);

        const result = parseCloudDescriptors(parser);
        expect(result).toEqual(TestDataCloudDescriptor_OVC230TCU_Data);
    });

    test('overcast layer below', () => {
        const parser = new ParserState(TestDataCloudDescriptor_OVCBelow_Text);

        const result = parseCloudDescriptors(parser);
        expect(result).toEqual(TestDataCloudDescriptor_OVCBelow_Data);
    });

    test('below layer, cloud type is specified (towering cumulonimbus)', () => {
        const parser = new ParserState(TestDataCloudDescriptor_FEWTCU_Text);

        const result = parseCloudDescriptors(parser);
        expect(result).toEqual(TestDataCloudDescriptor_FEWTCU_Data);
    });

    test('clear indication is parsed correctly', () => {
        const parser = new ParserState(TestDataCloudDescriptor_CLR_Text);

        const result = parseCloudDescriptors(parser);
        expect(result).toEqual(TestDataCloudDescriptor_CLR_Data);
    });

    test('invalid format is ignored', () => {
        const parser = new ParserState('METAR');

        const result = parseCloudDescriptors(parser);
        expect(result).toEqual(null);
    });
});
