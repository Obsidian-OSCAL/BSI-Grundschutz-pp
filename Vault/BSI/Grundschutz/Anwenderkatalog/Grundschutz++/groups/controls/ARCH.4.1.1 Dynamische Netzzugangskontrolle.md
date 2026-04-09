---
tags:
- Network_Access_Control_Rogue_Access_Point_Zero_Trust
- arch411-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.4.1.1 Dynamische Netzzugangskontrolle
parent_control: ARCH.4.1 Netzzugangskontrolle
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.4.1.1 - Dynamische Netzzugangskontrolle
Tags: "[Network Access Control](tags_Network Access Control)" "[Rogue Access Point](tags_Rogue Access Point)" "[Zero Trust](tags_Zero Trust)"
Gruppe: [ARCH.4 Zugangsbeschränkungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.4%20Zugangsbeschränkungen.md)
---

** Übergeordnetes Control: ** [ARCH.4.1 Netzzugangskontrolle](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/ARCH.4.1%20Netzzugangskontrolle.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Zugangsbeschränkungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.4%20Zugangsbeschränkungen.md) *** | Interne Netzsegmente | SOLLTE | den Zugriff von IT-Systemen auf das Netzsegment | anhand {{dynamischer Kriterien}} im Einklang mit den zugehörigen Anforderungen des Identitäts- und Berechtigungsmanagements | authentifizieren | Konfigurationshistorie | >Architektur für Interne Netzsegmente SOLLTE den Zugriff von IT-Systemen auf das Netzsegment anhand {{ insert: param, arch.4.1.1-prm1 }} im Einklang mit den zugehörigen Anforderungen des Identitäts- und Berechtigungsmanagements authentifizieren.

> [!info]- Guidance
>Bei der dynamischen Netzzugangskontrolle (Posturing oder Dynamic NAC) wird vor dem Netzzugang auch der Zustand des IT-Systems geprüft, z.B. der aktuelle Patchlevel des Systems oder von Erkennungssignaturen. Hierzu gehört auch die softwaredefinierte Netzzugangskontrolle, die dynamisch auf Aktivitäten des Systems oder aktuelle Threat Intelligence reagieren kann. Empfehlenswert ist es hierbei, die Konfiguration der Systeme automatisiert vorzunehmen, z.B. über eine automatische Supplicant-Konfiguration beim Rollout und die Zuweisung von Zertifikaten über Enrollment-Dienste. Die Formulierung "im Einklang mit den Festlegungen des Identitäts- und Berechtigungsmanagements" bedeutet, dass die Authentifizierung so erfolgt, wie in der Praktik IDM festgelegt. Hierzu gehört insbesondere die Verwendung aktueller kryptographischer Verfahren, wie sie im Thema Kryptographie zu finden ist.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | fec4fcdf-13e7-4a32-a3e1-52dce90ea1d7 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | fec4fcdf-13e7-4a32-a3e1-52dce90ea1d7 |
