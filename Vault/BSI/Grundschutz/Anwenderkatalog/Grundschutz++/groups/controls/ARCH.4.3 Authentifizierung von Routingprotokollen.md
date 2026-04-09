---
class: BSI-Stand-der-Technik-Kernel
type: control
control: ARCH.4.3 Authentifizierung von Routingprotokollen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# ARCH.4.3 - Authentifizierung von Routingprotokollen
Gruppe: [ARCH.4 Zugangsbeschränkungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.4%20Zugangsbeschränkungen.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Architektur (ARCH)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH%20Architektur.md)**<br> ***  &rarr; [Zugangsbeschränkungen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/ARCH.4%20Zugangsbeschränkungen.md) *** | Netze | SOLLTE | Änderungen an Routing-Tabellen | im Einklang mit den zugehörigen Anforderungen des Identitäts- und Berechtigungsmanagements | authentifizieren | Konfigurationshistorie | >Architektur für Netze SOLLTE Änderungen an Routing-Tabellen im Einklang mit den zugehörigen Anforderungen des Identitäts- und Berechtigungsmanagements authentifizieren.

> [!info]- Guidance
>Hierzu zählt z.B. die Authentifizierung von BGP/OSPF-Sitzungen zur Verhinderung von Route Hijacking, BGP origin validation with RPKI oder OSPF/ISIS/BGP MD5 or TTL+hMAC authentication. Die Formulierung "im Einklang mit den Festlegungen des Identitäts- und Berechtigungsmanagements" bedeutet, dass die Authentifizierung so erfolgt, wie in der Praktik IDM festgelegt. Hierzu gehört insbesondere die Verwendung aktueller kryptographischer Verfahren, wie sie im Thema Kryptographie zu finden ist.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 739ad3ad-cbbc-4809-9f20-1c59e85c864b |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 739ad3ad-cbbc-4809-9f20-1c59e85c864b |
