---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.13.6 Publikation der Serversignatur
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.13.6 - Publikation der Serversignatur
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.13 Senden und Empfangen von Nachrichten](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.13%20Senden%20und%20Empfangen%20von%20Nachrichten.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Senden und Empfangen von Nachrichten](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.13%20Senden%20und%20Empfangen%20von%20Nachrichten.md) *** | E-Mail | SOLLTE | die Publikation der Serversignatur | im DNS | aktivieren | Konfigurationshistorie | >Konfiguration für E-Mail SOLLTE die Publikation der Serversignatur im DNS aktivieren.

> [!info]- Guidance
>Eine Serversignatur, auch bekannt als DKIM (DomainKeys Identified Mail), ist eine kryptografische Signatur, die der E-Mail-Dienst der Institution an jede ausgehende Nachricht anhängt. Sie stellt sicher, dass die E-Mail tatsächlich von der angegebenen Domain gesendet wurde und während der Übertragung nicht manipuliert wurde. Ohne diese Signatur könnte ein Angreifer E-Mails im Namen der Institution versenden (E-Mail-Spoofing), was zu Phishing-Angriffen, dem Diebstahl von Zugangsdaten oder der Verbreitung von Malware führen könnte. Das Aktivieren der Publikation im DNS bedeutet, den öffentlichen Teil dieses kryptografischen Schlüssels im Domain Name System (DNS) der Domain zu veröffentlichen. Empfangende E-Mail-Server können diesen öffentlichen Schlüssel verwenden, um die Signatur der E-Mail zu verifizieren und somit deren Echtheit zu bestätigen. Zur Umsetzung kann die Institution E-Mail-Server-Software so konfigurieren, dass sie DKIM-Signaturen automatisch zu ausgehenden Nachrichten hinzufügt. Dies kann oft durch die Installation und Konfiguration von speziellen DKIM-Filter-Plugins erreicht werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | faf3fea5-b891-4d47-a2f7-74756b02a668 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | faf3fea5-b891-4d47-a2f7-74756b02a668 |
