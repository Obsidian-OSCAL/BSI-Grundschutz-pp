---
tags: Produktbeschreibung_Lateral_Movement
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.4.1.1 Weiterleitung von Anmeldeinformationen
parent_control: KONF.4.1 Anbindung an Verzeichnisdienst
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.4.1.1 - Weiterleitung von Anmeldeinformationen
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)" "[Lateral Movement](tags_Lateral Movement)"
Gruppe: [KONF.4 Vertrauenswürdige Basisdienste](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.4%20Vertrauenswürdige%20Basisdienste.md)
---

** Übergeordnetes Control: ** [KONF.4.1 Anbindung an Verzeichnisdienst](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/KONF.4.1%20Anbindung%20an%20Verzeichnisdienst.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Vertrauenswürdige Basisdienste](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.4%20Vertrauenswürdige%20Basisdienste.md) *** | IT-Systeme | SOLLTE | die Weiterleitung mehrfach verwendbarer Anmeldeinformationen |  | deaktivieren | Konfigurationshistorie | >Konfiguration für IT-Systeme SOLLTE die Weiterleitung mehrfach verwendbarer Anmeldeinformationen deaktivieren.

> [!info]- Guidance
>„Weiterleitung mehrfach verwendbarer Anmeldeinformationen“ (auch als Credential Forwarding oder Credential Delegation bekannt) meint technische Mechanismen, bei denen die Anmeldeinformationen eines Zugangskontos (z.B. Kennworthashes oder Kerberos-Tickets) an ein zweites System weitergereicht werden, um sich dort ebenfalls zu authentifizieren, ohne die Daten erneut eingeben zu müssen. Ziel der Deaktivierung ist hier die Unterbrechung von Angriffsketten, die auf dem Diebstahl von Zugangsdaten basieren. Ein Angreifer könnte sonst nach der Kompromittierung eines weniger kritischen Systems, wie einem Webserver, die dorthin weitergeleiteten Anmeldeinformationen eines Administrators aus dem Arbeitsspeicher auslesen und sich mit diesen Rechten unbemerkt im gesamten Netzwerk weiter ausbreiten (Laterale Bewegung). Das gezielte Deaktivieren des Credential Forwarding kann die Angriffsfläche erheblich reduzieren und solche „Pass-the-Hash“- oder „Pass-the-Ticket“-Angriffe effektiv eindämmen, da Anmeldeinformationen mit hohen Privilegien gar nicht erst auf unsichere Systeme gelangen. Stattdessen kann die Authentifizierung ausschließlich temporäre, eingeschränkte Tickets oder Tokens verwenden. Hierzu gehören z.B. Windows Remote Credential Guard oder RestrictedAdmin, sowie unter Linux SSH-Agent Forwarding oder GSSAPI. Eine Token-basierte Authentifizierung ist eine Strategie zur Verbesserung der Informationssicherheit. Nachdem Benutzende ihre Anmeldedaten eingegeben haben, werden diese überprüft und ein einmaliges verschlüsseltes Token generiert, mit dem sie anschließend auf Online-Ressourcen zugreifen können, ohne bei jeder Anfrage ihren Benutzernamen und ihr Passwort eingeben zu müssen. Bei SSH-Verbindungen kann die unsichere „Agent Forwarding“-Funktion serverseitig in der Konfigurationsdatei deaktiviert werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 6089e247-2518-4c90-b991-df8cbb24585f |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 6089e247-2518-4c90-b991-df8cbb24585f |
