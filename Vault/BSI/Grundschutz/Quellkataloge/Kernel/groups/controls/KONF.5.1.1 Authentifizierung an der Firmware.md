---
tags: Produktbeschreibung
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.5.1.1 Authentifizierung an der Firmware
parent_control: KONF.5.1 Authentifizierung am System
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.5.1.1 - Authentifizierung an der Firmware
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)"
Gruppe: [KONF.5 Authentifizierung](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.5%20Authentifizierung.md)
---

** Übergeordnetes Control: ** [KONF.5.1 Authentifizierung am System](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.5.1%20Authentifizierung%20am%20System.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Authentifizierung](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.5%20Authentifizierung.md) *** | IT-Systeme | SOLLTE | den Zugriff auf die Firmware | im Einklang mit den zugehörigen Anforderungen zum Identitäts- und Berechtigungsmanagement | authentifizieren | Konfigurationshistorie | >Konfiguration für IT-Systeme SOLLTE den Zugriff auf die Firmware im Einklang mit den zugehörigen Anforderungen zum Identitäts- und Berechtigungsmanagement authentifizieren.

> [!info]- Guidance
>Durch unautorisierte Änderungen an Einstellungen der Firmware (UEFI oder Embedded System) könnten Fehlerzustände entstehen oder Sicherheitsfunktionen wie TPM deaktiviert werden. Dies kann je nach Firmware durch lokale Zugangspasswörter oder zentrale Berechtigung umgesetzt werden. Hierbei sind insbesondere Einstellungen von Sicherheitsfunktionen oder der Netzanbindung relevant. Die Formulierung "im Einklang mit den zugehörigen Anforderungen zum Identitäts- und Berechtigungsmanagement" bedeutet, dass die Authentifizierung so erfolgt, wie in der Praktik Berechtigung (BER) festgelegt. Hierzu gehört insbesondere die Verwendung aktueller kryptographischer Verfahren, wie sie im Thema Kryptographie zu finden ist.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | e9bd0b40-47ed-4e4d-a747-ad71884f076f |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [1](effort_level_1) |> | ** Alternate Identifier ** | e9bd0b40-47ed-4e4d-a747-ad71884f076f |

> [!info]- Links> > related: [BER.1.1 Verfahren und Regelungen](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/BER.1.1%20Verfahren%20und%20Regelungen.md)
