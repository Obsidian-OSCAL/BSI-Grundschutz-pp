---
tags: Cryptography
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.1.5 Verschlüsselung von Konfigurationsgeheimnissen
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.1.5 - Verschlüsselung von Konfigurationsgeheimnissen
Tags: "[Cryptography](tags_Cryptography)"
Gruppe: [KONF.1 Grundlagen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.1%20Grundlagen.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Grundlagen](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.1%20Grundlagen.md) *** |  | SOLLTE | Konfigurationsgeheimnisse |  | verschlüsseln | IT-Betriebskonzept | >Konfiguration SOLLTE Konfigurationsgeheimnisse verschlüsseln.

> [!info]- Guidance
>Konfigurationsgeheimnissen sind sensitive, nicht-öffentliche Daten, die von Systemen, Applikationen oder Diensten zur Laufzeit benötigt werden, um auf andere Ressourcen zuzugreifen oder ihre eigene Funktionalität sicherzustellen. Bekannte Beispiele sind Anmeldeinformationen wie Passwörter, Datenbank-Verbindungszeichenfolgen (Connection Strings), API-Schlüssel oder private Schlüssel von Zertifikaten; im Englischen wird hierfür übergreifend der Fachbegriff Secrets verwendet. Der Zweck dieser Vorschrift ist die Sicherstellung der Vertraulichkeit dieser hochsensiblen Informationen. Ungeschützt im Klartext hinterlegt, könnte ein Angreifer bei einem unautorisierten Zugriff auf Konfigurationsdateien, Quellcode-Verzeichnisse oder Backups diese Geheimnisse direkt auslesen und damit weitreichenden Zugriff auf angebundene Systeme oder Daten erlangen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 195fff6c-f5c2-466c-8a28-81b3167dad8d |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 195fff6c-f5c2-466c-8a28-81b3167dad8d |
