import { Flex, Select, Text } from '@radix-ui/themes'

export const MainApp = () => {
  const languages = [
    {
      label: 'Vietnamese',
      value: 'vietnamese',
    },
    {
      label: 'French',
      value: 'french',
    },
    {
      label: 'English',
      value: 'english',
    },
  ]

  return (
    <Flex direction="column" align="center">
      <Text size="3" color="blue" weight="bold">
        Translate In Context
      </Text>
      <div className="mt-2 self-end">
        <Select.Root defaultValue="vietnamese" size="1">
          <Select.Trigger />
          <Select.Content>
            {languages.map((language) => (
              <Select.Item key={language.value} value={language.value}>
                {language.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </div>
      <Flex direction="column" gap="1" className="mt-2 self-start">
        <Text size="2" color="gray">
          Blacken text: abc
        </Text>
        <Text size="2" color="gray">
          Context: abcd
        </Text>
        <Text size="1" color="bronze" mt="3">
          Translate
        </Text>
      </Flex>
    </Flex>
  )
}
