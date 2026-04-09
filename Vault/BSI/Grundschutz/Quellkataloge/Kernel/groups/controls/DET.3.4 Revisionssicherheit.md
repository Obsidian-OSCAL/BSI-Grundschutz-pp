---
tags: Insider_Threat
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.3.4 Revisionssicherheit
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.3.4 - Revisionssicherheit
Tags: "[Insider Threat](tags_Insider Threat)"
Gruppe: [DET.3 Protokollierung](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.3%20Protokollierung.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Detektion (DET)](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET%20Detektion.md)**<br> ***  &rarr; [Protokollierung](BSI/Grundschutz/Quellkataloge/Kernel/groups/DET.3%20Protokollierung.md) *** |  | SOLLTE | Änderungen am Audit Log | revisionssicher | dokumentieren | Detektions-Konzept | >Detektion SOLLTE Änderungen am Audit Log revisionssicher dokumentieren.

> [!info]- Guidance
>Wenn die Protokollaufzeichnung unzureichend vor Veränderung geschützt ist, könnten Innentäter diese manipulieren oder löschen, um nicht erkannt oder belangt zu werden. Hierzu gehört auch, dass Administrierende die Protokolldaten zu ihren eigenen Tätigkeiten manipulieren oder löschen könnten. Die Integrität kann durch die Erstellung und getrennte Aufbewahrung von kryptografischen Hashes oder ein Versionskontrollsystem sichergestellt werden. Um sicherzustellen, dass nur autorisierte Personen die Protokolle verändern können, können z.B. Verschlüsselung und getrennte Aufbewahrung des Schlüssels, einmalig beschreibare Datenträger, oder ein Protokollierungsserver/SIEM mit stark eingeschränkten Zugriffsrechten eingesetzt werden. Auch die Aufzeichnung in einer öffentlichen Transparenzdatei ist möglich, wenn die Protokolle keine vertraulichen Daten enthalten.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 1cd947a7-70a2-41c9-b3fd-90f3ef75838c |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 1cd947a7-70a2-41c9-b3fd-90f3ef75838c |
