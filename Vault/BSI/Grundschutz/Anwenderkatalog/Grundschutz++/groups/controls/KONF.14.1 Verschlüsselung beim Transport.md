---
tags:
- Produktbeschreibung_Cryptography_Zero_Trust
- konf141-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.14.1 Verschlüsselung beim Transport
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.14.1 - Verschlüsselung beim Transport
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)" "[Cryptography](tags_Cryptography)" "[Zero Trust](tags_Zero Trust)"
Gruppe: [KONF.14 Verteilte Anwendungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.14%20Verteilte%20Anwendungen.md)
---

> [!info]- Untergeordnete Controls
> [KONF.14.1.1 Obligatorische Verschlüsselung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.14.1.1%20Obligatorische%20Verschlüsselung.md)> [KONF.14.1.2 Ende-zu-Ende-Verschlüsselung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.14.1.2%20Ende-zu-Ende-Verschlüsselung.md)### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Verteilte Anwendungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.14%20Verteilte%20Anwendungen.md) *** | Anwendungen | SOLLTE | Kommunikation beim Transport | über Netze nach {{einem anerkannten Standard}} | verschlüsseln | Konfigurationshistorie | >Konfiguration für Anwendungen SOLLTE Kommunikation beim Transport über Netze nach {{ insert: param, konf.14.1-prm1 }} verschlüsseln.

> [!info]- Guidance
>Werden Daten unverschlüsselt übertragen, so könnten sie abgehört oder unbemerkt manipuliert werden. Relevant sind hierbei alle von der Anwendung übertragenen Daten, inklusive Authentifizierung an der Benutzerschnittstelle oder API, Abruf von Daten, Server-Server-Replikation oder zur Datensicherung. Das betrifft sowohl Inhalts- als auch Metadaten. Die Umsetzung kann mit Algorithmen zur Transportverschlüsselung wie Transport Layer Security (TLS) oder Ende-zu-Ende-Verschlüsselung erfolgen. Für aktuelle Verschlüsselungsverfahren siehe BSI TR-02102. Die Konfiguration der Verschlüsselung kann sich daran orientieren, wie lange die transportieren Daten, z.B. Transaktionen, vertraulich zu behandeln sind. Eine Herausforderung hierbei sind Anwendungen, die über allgemeine Anbindungen mit anderen Institutionen kommunizieren, z.B. E-Mails oder Anrufe ins öffentliche Telefonnetz. Diese Anwendungen können nur ihren Teil der Verbindungsstrecke verschlüsseln, so dass der Rest der Strecke und damit die Verbindung an sich dennoch unverschlüsselt sein könnte. Überträgt die Anwendung keine schützenswerten Daten über das Netz, so ist die Anforderung entbehrlich.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 99806244-514d-43e2-be34-4ac7ab0517ad |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [2](effort_level_2) |> | ** Alternate Identifier ** | 99806244-514d-43e2-be34-4ac7ab0517ad |
